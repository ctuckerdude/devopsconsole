# DevopsConsole
The DevopsConsole app is intended to provide a basis for functionality related to provisioning versioned infrastructures.
The application has been implemented as a Microservice using Spring Boot
and Angular 7 with Material2, incorporating the SB Admin for Angular7 and Material2 Template 
(https://github.com/start-javascript/sb-admin-material). 

The functionality is focused on provisioning versioned infrastructures stored in Bitbucket Git repositories.
The versioned infrastructures used in this project consist of Terraform scripts which spin up Kubernetes Clusters in
Amazon EKS. The idea being that you can have many different versioned infrastructures that can be easily provisioned or 
decommissioned as required. 

The initial functionality consists of retrieving a list of Bitbucket Git repos containing the provisioning scripts, using the
Bitbucket REST API. The user can click on a specific environment they require to be provisioned, which then invokes the Microservice 
API to perform the deployment. The Microservice invokes a script which downloads the specified git repo and perform the provisioning
process.

More Devops functions will be included in future releases.

For licencing and distribution please consult the licences: 
1. https://github.com/start-javascript/sb-admin-material/blob/master/LICENSE


**Installation and building frontend**
1. Open terminal in src/frontend
2. Run: npm install
3. To develop and test ui, start server: npm start
4. Once development of ui complete, build prod release: npm run build
   The prod distribution will be deployed to src/main/resources/static 

