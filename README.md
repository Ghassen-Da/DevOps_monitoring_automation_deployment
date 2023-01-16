#DevOps Project 

This is an overview of the overall architecture:
![image](https://user-images.githubusercontent.com/53980293/212745188-779dfda5-4207-4948-8044-679584e2bc8c.png)


## Application
3 microservices:
- ecommerce microservice
- car microservice
- house microservice


## Docker
We dockerized the 3 microservices and pushed to Dockerhub.


## Kubernetes

### Namespaces

![image](https://user-images.githubusercontent.com/56545375/212728246-330456e7-5764-41e4-90dd-20de936a129a.png)


### Ingress
- We created 2 ingress routes.

![image](https://user-images.githubusercontent.com/56545375/212728759-103afcd2-1bdb-46f3-9e78-30f6a9538f2b.png)


### App

![image](https://user-images.githubusercontent.com/56545375/212729274-b469f81a-dedc-4634-84f7-3278cda94b46.png)

- The 3 microservices are in the default namespace.
- Each microservice is deployed via Helm Charts.
- The template contains Deployment + Service.



### Dashboard

![image](https://user-images.githubusercontent.com/56545375/212728634-113630a9-0636-438e-821d-e97a0942fc00.png)

- We created Admin user
- We created a dashboard that can be accessible only by the admin user


## Observability
All observability tools are in the namespace monitoring.

![image](https://user-images.githubusercontent.com/56545375/212729745-bab2d2e3-0cde-4a12-9b19-416dc3090c66.png)


### Prometheus (metrics)

![image](https://user-images.githubusercontent.com/56545375/212729530-676d2630-5e1a-4eb5-b003-6cbcf2eeaf25.png)

- The service's type of Prometheus is NodePort.
- Prometheus is exposed on port 30000

### Loki (logging)

![image](https://user-images.githubusercontent.com/56545375/212730354-9bfaa65a-647f-45eb-9ed0-92532c7bb1c6.png)

### Grafana (visualization)

![image](https://user-images.githubusercontent.com/56545375/212730174-d194680c-32c0-407c-a7e6-610d7ac40c33.png)

- The service's type of Grafana is NodePort.
- Prometheus is exposed on port 32000

## GitOps (ArgoCD)

![image](https://user-images.githubusercontent.com/56545375/212730968-f1d834a0-11c1-41bb-b2ef-19a6d043494a.png)

- Deployed in argocd namespace



## Deployment
We created the first micro-stack to deploy the aks cluster and create the different namespaces we need, then we use the output to install helm releases for each microservice in the default namespace.  
```shell
terraform output kube_config > file &&
sed -e '2,$!d' -e '$d' file > ~/.kube/config
```

Finally we deploy prometheus, loki, grafana and monitoring components to the monitoring namespace and the dashboard components to the dashboard namespace







