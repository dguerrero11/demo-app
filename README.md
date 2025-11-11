# 🛍️ Tienda Demo - CI/CD con Tekton

Aplicación de demostración para el pipeline CI/CD con Tekton y ArgoCD.

## Tecnologías

- **Node.js + Express**: Backend
- **Docker**: Containerización
- **Tekton**: CI/CD Pipeline
- **ArgoCD**: GitOps Deployment
- **Kubernetes**: Orquestación

## Estructura
```
.
├── index.js          # Aplicación principal
├── package.json      # Dependencias
├── Dockerfile        # Imagen Docker
└── README.md         # Este archivo
```

## Pipeline CI/CD

El pipeline automáticamente:
1. 📥 Clona el código de GitHub
2. 🔨 Construye la imagen Docker con Kaniko
3. 📤 Sube la imagen a Docker Hub
4. 🔄 Actualiza los manifiestos K8s
5. ✅ ArgoCD detecta y despliega

## Variables de Entorno

- `PORT`: Puerto del servidor (default: 3000)

## Endpoints

- `/`: Página principal
- `/health`: Health check endpoint
