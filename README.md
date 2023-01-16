# DevOps Project 

Helm chart for each microservice.  
## Deployment
We created the first micro-stack to deploy the aks cluster and create the different namespaces we need, then we use the output to install helm releases for each microservice in the default namespace.  
Next we connect the kubectl to the cluster following the command bellow
```shell
terraform output kube_config > ~/.kube/config &&
sed -e '2,$!d' -e '$d' ~/.kube/config > ~/.kube/config 
```
Finally we deploy prometheus, loki, grafana and monitoring components to the monitoring namespace and the dashboard components to the dashboard namespace.
