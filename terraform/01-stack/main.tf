resource "azurerm_resource_group" "rg" {
  name     = var.rgname
  location = var.location
}

resource "azurerm_kubernetes_cluster" "ecommerce_app" {
  name                = "ecommerce_aks"
  location            = azurerm_resource_group.rg.location
  resource_group_name = azurerm_resource_group.rg.name
  dns_prefix          = "ecommerceaks"
  sku_tier            = "Free"

  default_node_pool {
    name       = "app"
    node_count = 1
    vm_size    = "Standard_D2_v2"
  }

  identity {
    type = "SystemAssigned"
  }

  tags = {
    Environment = "Production"
  }
}
