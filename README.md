# SE3020-Distributed-Systems-Assignment

# Member Details
<ul>
 <li>
IT21237904	Gunawardana U. G. C. D	
 </li>
 <li>
IT21219252	Senadheera S. A. A. D
 </li>
 <li>
IT21286414	Gunathilaka L. P. N		
 </li>
 <li>
IT21214752	Perera S. S
 </li>
</ul>

# Original Repositories ( If you want to see commit histories)
<ul>
 <li>
Frontend: https://github.com/Navojith/DS-Assignment-frontend
 </li> 
  <li>
Course Management Service: https://github.com/Dinal-Senadheera/course_management_service
 </li> 
  <li>
Payment Service: https://github.com/ch4mi2/Payment-Service-Distributed-Systems-Assignment
 </li> 
  <li>
Auth Service: https://github.com/ShenanPerera/auth-service
 </li> 
  <li>
Notification Service: https://github.com/Navojith/DS-Assignment-notification-service
 </li> 
  <li>
Progression Service: https://github.com/Navojith/DS-Assignment-progression-service
 </li> 
</ul>


# Project Documentation
This repository contains the codebase for a distributed system composed of various microservices. Below are the steps to set up and run the system locally for development or testing purposes.

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (with npm or pnpm)
- [Docker Desktop](https://www.docker.com/products/docker-desktop)
- [Minikube](https://minikube.sigs.k8s.io/docs/start/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/)

## Installation and Setup

1. Clone the repository to your local machine:

```bash
git clone https://github.com/yourusername/project.git
cd project
```

2. Start Minikube:

```bash
minikube start
```

3. Configure Docker to use Minikube's Docker daemon:

```bash
minikube -p minikube docker-env --shell powershell | Invoke-Expression
```

4. Build docker images for all services

```bash
docker build -t servicename-image .
```

5. Apply Kubernetes deployment and service configurations:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
```

## Verification

Ensure all pods and services are running:

```bash
kubectl get pods
kubectl get services
```

## Accessing Services

To access each service, open a new terminal window and port forward to the respective service port:

`kubectl port-forward svc/payment-service port:port`

## Configuration

- For `auth`, `course`, and `payment` services, create a `.env` file in each service's directory and provide the MongoDB URI.
- For `progression` and `notification` services, create configuration files and configure cluster IPs after deployment.

## License

This project is licensed under the [MIT License](LICENSE).
