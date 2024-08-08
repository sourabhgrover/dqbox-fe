import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { Radio, RadioGroup, Switch } from "@headlessui/react";
import { useState } from "react";
import CustomDatePicker from "../common/CustomDatePicker";
import { classNames } from "../../utils/utils";

const memoryOptions = [
  { name: "COMPLETENESS", inStock: true },
  { name: "CONSISTENCY", inStock: true },
  { name: "REF_INTEGRITY", inStock: true },
];

const kpiTypeOptions = [
  { name: "COMPLETENESS", inStock: true },
  { name: "CONSISTENCY", inStock: true },
  { name: "REF_INTEGRITY", inStock: true },
];

const kpiLevelOptions = [
  { name: "REPORTING_AGENT", inStock: true },
  { name: "OBSERVED_AGENT", inStock: true },
  { name: "BOOKING_OFFICE", inStock: true },
  { name: "SYSTEM_RULE", inStock: true },
];

export default function DQRuleForm() {
  const [enabled, setEnabled] = useState(false);
  const [mem, setMem] = useState(memoryOptions[2]);
  const [kpiType, setKpiType] = useState(kpiTypeOptions[2]);
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add New DQ Rule
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rule ID
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Attribute Name
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="col-span-full">
              <fieldset aria-label="Choose a memory option">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    Rule Type
                  </div>
                </div>

                <RadioGroup
                  value={mem}
                  onChange={setMem}
                  className="mt-2 grid grid-cols-3 gap-3 sm:grid-cols-6"
                >
                  {memoryOptions.map((option) => (
                    <Radio
                      key={option.name}
                      value={option}
                      disabled={!option.inStock}
                      className={classNames(
                        option.inStock
                          ? "cursor-pointer focus:outline-none"
                          : "cursor-not-allowed opacity-25",
                        "flex items-center justify-center rounded-md bg-white px-3 py-3 text-sm font-semibold uppercase text-gray-900 ring-1 ring-gray-300 hover:bg-gray-50 data-[checked]:bg-indigo-600 data-[checked]:text-white data-[checked]:ring-0 data-[focus]:data-[checked]:ring-2 data-[focus]:ring-2 data-[focus]:ring-indigo-600 data-[focus]:ring-offset-2 data-[checked]:hover:bg-indigo-500 sm:flex-1 [&:not([data-focus],[data-checked])]:ring-inset"
                      )}
                    >
                      {option.name}
                    </Radio>
                  ))}
                </RadioGroup>
              </fieldset>
            </div>
            <div className="col-span-full">
              <div className="flex item-center gap-4">
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Is Tech Rule
                  </label>
                  <div className="mt-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Is Instr Rule
                  </label>
                  <div className="mt-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Is Prtctn Rule
                  </label>
                  <div className="mt-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Is Ctpy Rule
                  </label>
                  <div className="mt-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <div className="flex item-center gap-4">
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Apply DQ Rule In
                  </label>
                  <div className="mt-2">
                    Apply DQ rule in BIRD Input layer or Enriched layer
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    BIRD Input Layer
                  </label>
                  <div className="mt-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    BIRD Enriched Input Layer
                  </label>
                  <div className="mt-2">
                    <Switch
                      checked={enabled}
                      onChange={setEnabled}
                      className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                    >
                      <span className="sr-only">Use setting</span>
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                      />
                      <span
                        aria-hidden="true"
                        className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Rule Condition
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enter reason if existing rule is deactivated
              </p>
            </div>
            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Error Message
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enter reason if existing rule is deactivated
              </p>
            </div>
            <div className="sm:col-span-2 sm:col-start-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Active
              </label>
              <div className="mt-2">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className="group relative inline-flex h-5 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute h-full w-full rounded-md bg-white"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute mx-auto h-4 w-9 rounded-full bg-gray-200 transition-colors duration-200 ease-in-out group-data-[checked]:bg-indigo-600"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute left-0 inline-block h-5 w-5 transform rounded-full border border-gray-200 bg-white shadow ring-0 transition-transform duration-200 ease-in-out group-data-[checked]:translate-x-5"
                  />
                </Switch>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="region"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Valid From
              </label>
              <div className="mt-2">
                <CustomDatePicker />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="postal-code"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Valid To
              </label>
              <div className="mt-2">
                <CustomDatePicker />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Reason For Deactivation
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Enter reason if existing rule is deactivated
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
