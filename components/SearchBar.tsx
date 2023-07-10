"use client";

import { useState } from "react";

import React from "react";
import Image from "next/image";
import { SearchManufacturer } from "./";
import { useRouter } from "next/navigation";

interface OC {
  otherClasses: string;
}

const SearchButton = ({ otherClasses }: OC) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="search"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (manufacturer === "" && model === "") {
      return alert("Please fill in search bar");
    }
    updateSearchparams(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchparams = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathName = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    router.push(newPathName);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car md=odel icon"
          className="absolute w-5 h-5 ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}

export default SearchBar;
