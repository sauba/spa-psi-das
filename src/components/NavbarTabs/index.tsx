'use client'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import PsicoterapiaCasal from '../PsicoterapiaCasal'
import PsicoterapiaIndividual from '../PsicoterapiaIndividual'

export default function NavbarTabs() {
  return (
    <div className={`font-bad-script`} id='terapias'>
      <Tab.Group>
        <Tab.List className={`flex justify-around items-center lg:py-16`}>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected ? 'animate-wiggle text-green-400 xl:text-4xl 2xl:text-6xl text-3xl text-center border-none outline-none' : 'xl:text-3xl 2xl:text-5xl text-xl text-center border-none outline-none text-amber-950'
                }
              >
                Terapia Individual
              </button>
            )}
          </Tab>

          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <button
                className={
                  selected ? 'animate-wiggle text-green-400 xl:text-4xl 2xl:text-6xl text-3xl text-center border-none outline-none' : 'xl:text-3xl 2xl:text-5xl text-xl text-center border-none outline-none text-red-50'
                }
              >
                Terapia de Casal
              </button>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels className={`w-full`}>
          <Tab.Panel className={``}><PsicoterapiaIndividual /></Tab.Panel>
          <Tab.Panel className={``}><PsicoterapiaCasal /></Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}