function isVeg(dish) {
    if (dish.toLowerCase().includes('chicken') || dish.toLowerCase().includes('egg')) {
        return false;
    }
    return true;
}

function isOnionGarlicFree(dish) {
    if (dish.toLowerCase().includes('onion') || dish.toLowerCase().includes('garlic')) {
        return false;
    }
    return true;
}

const vegMenu = menu.filter(isVeg);
const jainMenu = vegMenu.filter(isOnionGarlicFree);

console.log(menu);
console.log(vegMenu);
console.log(jainMenu);
