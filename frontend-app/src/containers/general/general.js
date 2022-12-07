import React, { Component, Fragment } from "react";

import { Parallax } from "react-parallax";
import Navbar from "../nav/navbar";
import planning from "../../images/planning.png";
import supplying from "../../images/supplying.png";
import inventory_management from "../../images/inventory_management.png";
import manufacturing from "../../images/manufacturing.png";
import delivery from "../../images/delivery.png";
import customer_support from "../../images/customer_support.png";
import Header from "../header/Header";
import '../../index.css';

export default class General extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <main role="main" class="">
                    <section class="pb-20 mt-0 font-dm-sans">
                        <div class="max-w-5xl px-20 mx-auto sm:px-30 md:px-50 lg:px-0">
                            <h2 class="text-left mb-6 text-primary-dark-gray text-3xl font-semibold  pt-50">
                                Automotive Manufacturing
                            </h2>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row gap-x-24">
                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl text-left font-semibold  text-primary-dark-gray">
                                            Overview
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The automotive supply chain for creating trucks, cars, and
                                            other vehicles is the second most complex after software.
                                            The automotive industry has thousands of companies
                                            requiring a countless number of parts parts to deliver
                                            high quality transportation products. The automotive
                                            supply chain contains the outgoing and incoming of
                                            resources and services to manunfacture, supply, and
                                            deliver transportation globally. There is currently global
                                            legislation in place by the United Nations (UN) regarding
                                            safety and environmental standards for both production and
                                            continued checks on vechiles in use on the market. Unlike
                                            other industries, in the automotive supply chain,
                                            manufacturers (i.e., Original Equipment Manufacturers or
                                            OEMS) rather than enterprises are held accountable for
                                            cybersecurity failures.
                                        </p>
                                    </div>
                                </div>
                                <div class="flex flex-1 flex-col items-start">
                                    <h4 class="text-2xl font-semibold font-poppins text-primary-dark-gray py-0">
                                        General Regulations
                                    </h4>
                                    <ul class="text-left py-5 text-gray-600 list-disc text-md">
                                        <li class="text-gray-900 font-bold text-md">
                                            <a
                                                href="https://unece.org/wp29-introduction"
                                                target="_blank"
                                            >
                                                UNECE’s WP.29 and UN Regulations
                                            </a>
                                            : provisions for safety and environmental factors (of
                                            vehicles, systems, parts and equipment), includes
                                            performance tests and administrative procedures. Affects:
                                            approval, production conformity for manufacturers,
                                            Contracting Parties
                                        </li>
                                        <li>
                                            UN Global Technical Regulations (GTRs): global performance
                                            requirements and test procedures
                                        </li>
                                        <li>
                                            <a
                                                class="text-gray-600 text-md underline"
                                                href="https://gdpr.eu/checklist"
                                                target="_blank"
                                            >
                                                GDPR
                                            </a>
                                            : The General Data Protection Regulation is a European law
                                            that "requires organizations to safeguard personal data
                                            and uphold the privacy rights of anyone in EU territory."
                                        </li>
                                        <li class="text-md">
                                            <a
                                                class="text-gray-600 text-md underline"
                                                href="https://oag.ca.gov/privacy/ccpa"
                                                target="_blank"
                                            >
                                                CA Consumer Privacy Act
                                            </a>
                                            : Specifies performance and audit requirements for
                                            managing a vehicle’s cyber risk and software updates.{" "}
                                        </li>
                                        <li>
                                            <a
                                                class="text-gray-600 text-md underline"
                                                href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-155-cyber-security-and-cyber-security"
                                                target="_blank"
                                            >
                                                R155
                                            </a>
                                            : Requires manufacturers to set up and implement a
                                            certified cybersecurity management system (CSMS) to
                                            receive type approval in UNECE member countries.
                                        </li>
                                        <li>
                                            <a
                                                class="text-gray-600 text-md underline"
                                                href="https://unece.org/transport/documents/2021/03/standards/un-regulation-no-156-software-update-and-software-update"
                                            >
                                                R156
                                            </a>
                                            : Requires manufacturers to implement a software update
                                            management system to help prevent vehicle safety from
                                            being compromised due to a software update, including
                                            over-the-air updates.
                                        </li>
                                    </ul>
                                    <ul class="text-left text-gray-600 list-disc">
                                        <li class="text-gray-900 font-bold">
                                            <a
                                                href="https://www2.deloitte.com/content/dam/Deloitte/us/Documents/manufacturing/us-manu-cyber-risk-in-advanced-manufacturing.pdf#page=18"
                                                target="_blank"
                                            >
                                                Cybersecurity Disclosure Act of 2015
                                            </a>
                                            : Requires all public companies to disclose the level of
                                            cybersecurity expertise in board of directors,
                                            specifically:
                                        </li>
                                        <ol class="list-decimal">
                                            <li>
                                                Disclose whether any member of the governing body, such
                                                as the board of directors or general partner, of the
                                                reporting company has expertise or experience in
                                                cybersecurity and in such detail as necessary to fully
                                                describe the nature of the expertise or experience; and,
                                                if no member of the governing body of the reporting
                                                company has expertise or experience in cybersecurity
                                            </li>
                                            <li>
                                                Describe what other cybersecurity steps taken by the
                                                reporting company were taken into account by such
                                                persons responsible for identifying and evaluating
                                                nominees for any member of the governing body, such as a
                                                nominating committee
                                            </li>
                                        </ol>
                                    </ul>
                                </div>
                            </div>

                            <div class="relative mt-40 lg:mt-52">
                                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={planning}
                                            alt=""
                                            role="presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Planning
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The planning state in the automotive supply chain is
                                            crtitical because it sets up the success of the entire
                                            process. The planning stage includes procuring thr correct
                                            parts and services for succes. The planning step must
                                            ensure that everyone and everything involved with the
                                            process are reliable and will provide customer
                                            satisfaction. Important parts must be ready at the right
                                            times for the manufacturing.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={supplying}
                                            alt=""
                                            role=" presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Supplying
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            Suppliers are highly interconnected in the automotive
                                            industry. There are 3 tiers of suppliers.
                                            <ul>
                                                <li>
                                                    {" "}
                                                    <a
                                                        href="https://www.nist.gov/mep/successstories/2020/iatf-16949-and-core-tools-training-essential-tier-1-automotive-supplier"
                                                        target="_blank"
                                                    >
                                                        Tier 1
                                                    </a>
                                                    : Companies that supply finished parts or components
                                                    specific to cars.
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a
                                                        href="https://www.amatechinc.com/resources/blog/returnable-packaging/tier-1-2-3-automotive-industry-supply-chain-explained"
                                                        target="_blank"
                                                    >
                                                        Tier 2
                                                    </a>
                                                    : Tier 2 suppliers: Make other required parts, not
                                                    necessarily just for automotive industry.
                                                </li>
                                                <li>
                                                    {" "}
                                                    <a
                                                        href="https://www.amatechinc.com/resources/blog/returnable-packaging/tier-1-2-3-automotive-industry-supply-chain-explained"
                                                        target="_blank"
                                                    >
                                                        Tier 3
                                                    </a>
                                                    : Tier 3 suppliers: Suppliers of raw materials like
                                                    plastic and metals.{" "}
                                                </li>
                                            </ul>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={inventory_management}
                                            alt=""
                                            role="presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Inventory Management
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The inventory management phase of the automotive supply
                                            chain is important because it has multiple roles. It has
                                            to coordinate goods recieval, storage, picking up, and
                                            shipment of all the vehicles. Inventory management also
                                            moves raw materials, semi finished matierials, and
                                            finished projects. As well as these fucntions, it also has
                                            to comply with warehouse standards nationally and
                                            internationally. •Main functions are goods receival,
                                            storage, picking, shipment •Distribution, production,
                                            contract warehouses •Movement of raw, semi-finished, and
                                            finished productsThe inventory management phase of the
                                            automotive supply chain is important because it has
                                            multiple roles. It has to coordinate goods recieval,
                                            storage, picking up, and shipment of all the vehicles.
                                            Inventory management also moves raw materials, semi
                                            finished matierials, and finished projects. As well as
                                            these fucntions, it also has to comply with warehouse
                                            standards nationally and internationally. •Main functions
                                            are goods receival, storage, picking, shipment
                                            •Distribution, production, contract warehouses •Movement
                                            of raw, semi-finished, and finished products
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={manufacturing}
                                            alt=""
                                            role=" presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Manufacturing
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The manufacturing phase comprises the design, physical
                                            manufacturing, and software development of the vehicle's
                                            internal technology. The cyber risks at this phase range
                                            from intellectual property theft, social engineering,
                                            employee errors or abuse of systems, and vulnerabilities
                                            in mobile networks.
                                            https://jfrog.com/blog/log4shell-0-day-vulnerability-all-you-need-to-know/
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={delivery}
                                            alt=""
                                            role="presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Delivery
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The{" "}
                                            <a
                                                href="https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508_1.pdf"
                                                target="_blank"
                                            >
                                                delivery phase
                                            </a>{" "}
                                            consists of how finished vehicles arrive at dealerships
                                            and to customers. This typically involves finished
                                            vehicles being transported from manufacturers to dealer
                                            lots. While rare, a customer could order a vehicle
                                            directly from a manufacturer. The cyber threats for this
                                            phase mostly concern vulnerabilities in the finished
                                            software of the vehicles being delivered.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={customer_support}
                                            alt=""
                                            role=" presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Customer Support
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The{" "}
                                            <a
                                                href="https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508_1.pdf"
                                                target="_blank"
                                            >
                                                customer support phase
                                            </a>{" "}
                                            of the supply chain is the phase that includes the
                                            customers. A recent study shows that 54% of consumers
                                            would prefer better customer service over lower prices.
                                            Automotive manufacturers take this statistic seriously
                                            because this phase involves customers data that can be
                                            hacked and threatened for bad practice.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="technology_general_info" class="pb-20 mt-0 font-dm-sans">
                        <div class="max-w-5xl px-20 mx-auto sm:px-30 md:px-50 lg:px-0">
                            <h2 class="text-left mb-6 text-primary-dark-gray text-3xl font-semibold font-poppins">
                                Technology
                            </h2>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row gap-x-24">
                                    <h3 class="text-2xl text-left font-semibold font-poppins text-primary-dark-gray ">Overview</h3>
                                    <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                        The{" "}
                                        <a
                                            href="https://www.sonatype.com/resources/software-supply-chain- management-part-1-what-is-a-software-supply-chain"
                                            target="_blank"
                                        >
                                            supply chain in the software industry
                                        </a>{" "}
                                        involves keeping track of all components needed to deliver
                                        the product and ultimately affect the software development
                                        lifecycle (SDLC). This includes custom code used, open
                                        source, developers coding the product, DevOps tools,
                                        repositories, packs managers, maintenance of security
                                        vulnerabilities, etc. Documentation is key in the software
                                        supply chain process, especially documentation in the code.
                                        This documentation should include the third party components
                                        in use and their potential cyber threats. There should be a
                                        formal Software Bill of Materials that details the
                                        components used to create the software and their
                                        dependencies.
                                    </p>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={planning}
                                            alt=""
                                            role="presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Planning
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            <a
                                                href="www.gep.com/blog/technology/supply-chain-planning- what-why-and-how"
                                                target="-blank"
                                            >
                                                Planning
                                            </a>{" "}
                                            for the technology supply chain is the process of
                                            forecasting demand and planning accordingly to meet that
                                            anticipated demand. This can mean setting up production,
                                            marketing, distribution, sales, and supply accordingly. In
                                            the software industry it involves deciding on different
                                            components needed to develop that software including code
                                            structure, configurations, proprietary and open-source
                                            binaries, plugins, container dependencies, APIs, etc. They
                                            also decide how they are going to build orchestrators and
                                            tools such as assemblies, compilers, code analyzers, and
                                            repositories. Then the team must determine who will be
                                            working on which part of the production process. There
                                            must also be an official Statement of Work that will be
                                            sent to clients of software so they understand the make-up
                                            of the software.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={supplying}
                                            alt=""
                                            role=" presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Supplying
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            For{" "}
                                            <a
                                                href="blog.sonatype.com/software-supply-chain-a-definition-and-introductory-guide"
                                                target="_blank"
                                            >
                                                software suppliers
                                            </a>
                                            , most software today is built from third-party sourcing.
                                            The plethora of libraries and open-source components have
                                            allowed software developers and engineers to reduce costs
                                            and quickly offer their product on the market. In fact,
                                            many projects use on average 203 dependencies, 99% of
                                            codebases have open source dependencies, and 87-95% of
                                            enterprise codebases come from open source.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={inventory_management}
                                            alt=""
                                            role="presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Inventory Management
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            <a
                                                href="https://truedigitalsecurity.com/blog/a- better-way-to-manage-your-software-inventory"
                                                target="_blank"
                                            >
                                                Software inventory management
                                            </a>{" "}
                                            keeps track of all (1) software installations, licenses,
                                            (2) installation dates, (3) total number of licenses, (4)
                                            renewal date of licenses, (5) number of licenses procured
                                            and (6) their procurement date along with (7) which
                                            vendors they were procured from, (8) available updates,
                                            (9) available systems-to-date, and (10) and total monetary
                                            worth of all installed software. Strong inventory
                                            management in the software industry involves strong IT
                                            administration and management. IT administrators must
                                            consistently keep an inventory of all IT assets such as IT
                                            hardware and IT software for their company. They must
                                            perform computer inventory control tasks such as keeping
                                            track of the location and condition of all IT assets and
                                            monitoring software installations, updates, and
                                            expirations. A key difference to note between software
                                            inventory management and IT asset management, is that
                                            software inventory management involves keeping track of
                                            the software and applications used within an IT
                                            environment whereas IT asset management is keeping track
                                            of the type, vendors, size, and other relevant data about
                                            the software and applications in use.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={manufacturing}
                                            alt=""
                                            role=" presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Manufacturing
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            The{" "}
                                            <a
                                                href="https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508_1.pdf"
                                                target="_blank'"
                                            >
                                                manufacturing part of the software supply chain
                                            </a>{" "}
                                            is when the software actually gets created. When creating
                                            the software there are multiple potential cyber threats
                                            such as hacking internal packages or installing external
                                            malware. Continious testing of the software and who edits
                                            is wise to limit the bad actors. Many companies have been
                                            hacked because they didin't take proper caution while
                                            creating their products.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-52">
                                <div class="container flex flex-col lg:flex-row-reverse items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={delivery}
                                            alt=""
                                            role="presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Delivery
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            In the{" "}
                                            <a
                                                href="https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_attacks_508_1.pdf"
                                                target="blank"
                                            >
                                                delivery part of the technology suppply chain
                                            </a>
                                            , when going from the hands of the software company to the
                                            hands of the consumer there are many opportunities for
                                            hackers to install malware onto devices. These are usually
                                            seen as automatic updates that neither party are aware of.
                                            It is crucial that software companies take precaution in
                                            protecting code and distributing their products to the
                                            correct people.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="relative mt-20 lg:mt-24">
                                <div class="container flex flex-col lg:flex-row items-center justify-center gap-x-24">
                                    <div class="flex flex-1 justify-center mb-10 lg:mb-0 card-feature-border shadow-lg">
                                        <img
                                            class="h-3/6 w-3/6"
                                            loading="lazy"
                                            src={customer_support}
                                            alt=""
                                            role=" presentation"
                                        />
                                    </div>

                                    <div class="flex flex-1 flex-col items-start">
                                        <h3 class="text-2xl font-semibold font-poppins text-primary-dark-gray">
                                            Customer Support
                                        </h3>
                                        <p class="text-gray-600 my-4 text-left sm:w-3/4 lg:w-full">
                                            For{" "}
                                            <a
                                                href="https://www.cisa.gov/sites/default/files/publications/defending_against_software_supply_chain_
                                            attacks_508_1.pdf"
                                                target="_blank"
                                            >
                                                customer support in software
                                            </a>
                                            , since very few companies are responsible for the entire
                                            process of building devices, it is very important they
                                            offer lots of support and protection against the potential
                                            cyber risks to the customers. Many bad actors install
                                            backdoors into companies software to enable them to get
                                            access to their customers data. Over 20% of devices have
                                            some kind of malware on it, and it is up to the software
                                            companies to try and reduce this while keeping customers
                                            satisfied.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </Fragment>
        );
    }
}
