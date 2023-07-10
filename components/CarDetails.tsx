"use client";

import { CarProps } from "@/types";

import Image from "next/image";
import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { relative } from "path";

interface CarDetailsProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

function CarDetails({ car, isOpen, closeModal }: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] transform rounded-2xl overflow-y-auto bg-white p-6 shadow-xl transition-all flex flex-col gap-5 text-left">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="./close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="h-40 bg-cover  w-full relative bg-pattern rounded-lg bg-center">
                      <Image
                        src="/hero.png"
                        fill
                        priority
                        className="object-contain"
                        alt="hero"
                      />
                    </div>
                    <div className="flex gap-3 ">
                      <div className="flex-1 w-full h-24 relative ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="up"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 relative ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="side"
                        />
                      </div>
                      <div className="flex-1 w-full h-24 relative ">
                        <Image
                          src="/hero.png"
                          fill
                          priority
                          className="object-contain"
                          alt="down"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="capitalize">
                      {car.make} {car.model}
                    </h2>

                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          className="flex  justify-between gap-5 w-full text-right"
                          key={key}
                        >
                          <h4 className="text-grey capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="capitalize font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default CarDetails;
