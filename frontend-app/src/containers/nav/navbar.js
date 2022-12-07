import React, { Component, Fragment } from "react";

export default class Navbar extends Component {
    render() {
        return (
            
            <nav class="sticky bg-gray-200">
                <div class="mx-auto w-full px-2 sm:px-6 lg:px-8 " > {/* container div for nav */}
                    <div class="relative flex h-16 items-center justify-between"> {/* for nav ite,s*/}
                        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                            {/* Mobile menu button*/} -
                            <button type="button" class="inline-flex items-center justify-center rounded-md p-2 border-gray-400 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>
                                {/* 
                                    Icon when menu is closed.

                                    Heroicon name: outline/bars-3

                                    Menu open: "hidden", Menu closed: "block"*/}
                            
                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                {/*
                                    Icon when menu is open.

                                    Heroicon name: outline/x-mark

                                    Menu open: "block", Menu closed: "hidden"
                                */}
                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                            <div class="flex flex-shrink-0 items-center">
                                <img class="block h-8 w-auto lg:hidden" src="https://talentsourcing.deloitte.com/portal/357/images/logo--hiring-organization.png" alt="Home" />
                                <img class="hidden h-8 w-auto lg:block" src="https://talentsourcing.deloitte.com/portal/357/images/logo--hiring-organization.png" alt="Home" />
                            </div>
                            <div class="hidden sm:ml-6 sm:block">
                                <div class="flex space-x-4">

                                    <a href="/Home" class=" text-gray-900 px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Map</a>

                                    <a href="#" class="text-gray-400 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">General Info</a>

                                    <a href="/Logout" class="text-gray-400 hover:bg-gray-400 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Logout</a>


                                </div>

                            </div>
                        </div>
      
                    </div>

                </div>

                <div class="sm:hidden" id="mobile-menu">
                    <div class="space-y-1 px-2 pt-2 pb-3">

                        <a href="/Home" class="bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Map</a>

                        <a href="#" class="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">General Info</a>

                        <a href="/Logout" class="text-gray-400 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Logout</a>

                       
                    </div>
                </div>

            </nav>
        )
    }
}