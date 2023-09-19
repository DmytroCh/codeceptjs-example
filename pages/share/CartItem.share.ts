const { I } = inject();

class CartItem {
    locators = {
        template: '.cart_item',
        buttons: {
            remove: 'button[data-test*="remove-"]'
        },
        titles: {
            itemTitle: '.inventory_item_name',
        }
    }
}

// For inheritance
module.exports = new CartItem();
export = new CartItem();
