const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Tienda Demo - CI/CD con Tekton</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          max-width: 800px;
          margin: 50px auto;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }
        .container {
          background: rgba(255,255,255,0.1);
          padding: 30px;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        h1 { margin: 0 0 20px 0; }
        .info { 
          background: rgba(0,0,0,0.2); 
          padding: 15px; 
          border-radius: 8px;
          margin: 10px 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>🚀 Tienda Demo - CI/CD Pipeline</h1>
        <div class="info">
          <p><strong>Versión:</strong> 1.0.0</p>
          <p><strong>Pipeline:</strong> Tekton en Kubernetes</p>
          <p><strong>Deploy:</strong> ArgoCD GitOps</p>
          <p><strong>Hostname:</strong> ${require('os').hostname()}</p>
        </div>
        <p>✅ Aplicación desplegada exitosamente desde el pipeline CI/CD</p>
        <p>📦 Imagen construida con Tekton y almacenada en Docker Hub</p>
        <p>🔄 Desplegada automáticamente por ArgoCD</p>
      </div>
    </body>
    </html>
  `);
});

// Ruta de health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en puerto ${PORT}`);
  console.log(`📍 http://localhost:${PORT}`);
});
