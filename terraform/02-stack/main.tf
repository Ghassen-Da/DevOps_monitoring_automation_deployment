data "terraform_remote_state" "aks" {
  backend = "azurerm"
  config = {
    resource_group_name  = "tfstate_ecommerce"
    storage_account_name = "tfstateappecommerce"
    container_name       = "tfstateappecommerce"
    key                  = "01-stack.tfstate"
  }
}

resource "helm_release" "car" {
  name       = "car-chart"
  chart      = "../../car/chart"
  values = [
    "${file("./values-helm/values.car.yaml")}"
  ]
}


resource "helm_release" "house" {
  name       = "house-chart"
  chart      = "../../house/chart"
  values = [
    "${file("./values-helm/values.house.yaml")}"
  ]
}

resource "helm_release" "ecommerce" {
  name       = "ecommerce-chart"
  chart      = "../../e-commerce/chart"
  values = [
    "${file("./values-helm/values.ecommerce.yaml")}"
  ]
}