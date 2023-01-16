output "kube_config" {
  value = azurerm_kubernetes_cluster.ecommerce_app.kube_config_raw
  sensitive = true
}