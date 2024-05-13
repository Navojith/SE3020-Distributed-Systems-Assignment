# SE3020-Distributed-Systems-Assignment

# Project README

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

2. Install dependencies for all services (except payment-service and auth-service):

```bash
pnpm i
```

For `payment-service` and `auth-service`, use npm:

```bash
cd payment-service
npm i
cd ..
cd auth-service
npm i
cd ..
```

3. Start Minikube:

```bash
minikube start
```

4. Configure Docker to use Minikube's Docker daemon:

```bash
minikube -p minikube docker-env --shell powershell | Invoke-Expression
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

## Contributions

Contributions are welcome! Please follow the guidelines in the [CONTRIBUTING.md](CONTRIBUTING.md) file.

## License

This project is licensed under the [MIT License](LICENSE).
