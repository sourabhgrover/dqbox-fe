import { useState } from "react";
import DqKPI from "../components/SetTargets/DqKPI";
import SimpleBar from "simplebar-react";
import { classNames } from "../utils/utils";

const initialTabs = [
  { name: 'Manage DQ KPIs', href: '#', current: true , content: <DqKPI /> },
]



export default function SetTargets() {

  const [tabs, setTabs] = useState(initialTabs);
  // const { data, error, isLoading } = useGetPostsQuery();


  const handleTabClick = (tabName) => {
    setTabs((prevTabs) =>
      prevTabs.map((tab) =>
        tab.name === tabName
          ? { ...tab, current: true }
          : { ...tab, current: false }
      )
    );
  };

  const currentTab = tabs.find((tab) => tab.current).name;

  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
        <select
          id="tabs"
          name="tabs"
          // defaultValue={tabs.find((tab) => tab.current).name}
          value={currentTab}
          onChange={(e) => handleTabClick(e.target.value)}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {tabs.map((tab) => (
            <option key={tab.name}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav aria-label="Tabs" className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                aria-current={tab.current ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabClick(tab.name);
                }}
                className={classNames(
                  tab.current
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 py-4 text-sm font-medium',
                )}
              >
                {tab.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      <div className="mt-4">
        {tabs.map(
          (tab) =>
            tab.name === currentTab && (
              <div key={tab.name} className="px-3">
                <SimpleBar className='max-h-[65vh]'>
                {tab.content}
                </SimpleBar>
              </div>
            )
        )}
      </div>
    </div>
  )
}
