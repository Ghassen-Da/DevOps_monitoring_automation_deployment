terraform {
  required_version = "~>1.3.7"
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "~>3.31.0"
    }
  }
  backend "azurerm" {
    resource_group_name  = "tfstate_ecommerce"
    storage_account_name = "tfstateappecommerce"
    container_name       = "tfstateappecommerce"
    key                  = "01-stack.tfstate"
  }
}
provider "azurerm" {
  features {}
}