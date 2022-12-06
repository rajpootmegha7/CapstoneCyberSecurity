# Deloitte - Cyber Attack in the Supply Chain

## ITWS 6800 IT Master's Capstone

### The Team:

1. Megha Singh Rajpoot
2. Tiffany Filawo
3. Rachel Wang
4. Simran Nambiar


### Submitted to Professor - 'Prof. Randy Stewart'
### Submitted to Deloitte Client - 'Jessup Barrueco' and 'Dan Watson'

## Project Summary

Cyber attacks occur when a bad actor seeks to hurt an organization by identifying less secure components. Malware, via both hardware and software, can be used to tamper with almost every supply chain step across all industries. The “Cyber Attacks in the Supply Chain'' (“Cyber Attacks”)  project solves the issue of identifying cyber risks, bad actors, and potential mitigations in supply chains across the software and automotive industry by researching and developing an interactive map.

The solution developed was a website that displayed an interactive map of the different steps in a supply chain using the MERN stack. For two industries (i.e., automotive and technology), each step of the supply chain was displayed on the map with each step’s potential cyber risks and mitigations. The research was organized and stored in a MongoDB database. The frontend was designed in React, and the team developed APIs for the website’s core functions. Node.js was used for the backend, and Express.js for the midstack.

## Installation

1. Download the Zip file and extract all contents to an accessible in local machine
2. To setup the client open a command prompt within the "...\frontend-app" directory and run npm install.
3. To setup the server open a command prompt within the "...\backend" directory and run npm install.
4. Database is setup using Mongodb database can be accessed at location https://account.mongodb.com/account/login 
5. Login using credential mentioned in the credentials.txt file.
6. Database "CapstoneTeam4" is created which contains 3 collections:
    1. Technology - Which contains all the data related to technology industry risks and mitigation.
    2. Automotive - Which contains all the data related to automotive industry risks and mitigation.
    3. User-details - Stores all the information related to user when they register to our website. All the password and other important details are hashed.
7. In order to update the database use the Technology_Research.json and Automotive_Research.json file mentioned inside "../CapstoneCyberSecurity/backend" location. And use these json files to update the database directly.Once changes are updated user will be able to see the updates on the website.

## Running
1. To run the client open a command prompt within the "...\frontend-app" directory and run npm start.
2. To run the server open a command prompt within the "...\backend" directory and run npm start.


## Credits
** Cyber security Database values were derived from the following websites:

(www2.deloitte.com/cy/en/pages/risk/solutions/cyber-security-services.html)
(https://www.nist.gov/cyberframework)
(https://doi.org/10.6028/NIST.CSWP.04162018)
(https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final)
(https://www.safecode.org/wp-content/uploads/2017/05/SAFECode_TPC_Whitepaper.pdf)
(https://csrc.nist.gov/publications/detail/nistir/8272/final)
(https://csrc.nist.gov/projects/cyber-supply-chain-risk-management/federal-c-scrm)
(https://csrc.nist.gov/projects/cyber-supply-chain-risk-management/ssca)
