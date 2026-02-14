/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  let totalPrize = 0
    if(type === "regular") totalPrize += 0.00
    else if(type === "latte") totalPrize += 1.00
    else if(type === "cappuccino") totalPrize += 1.50
    else if(type === "mocha") totalPrize += 2.00
    else return -1

    if(size === "small") totalPrize += 3.00
    else if(size === "medium") totalPrize += 4.00
    else if(size === "large") totalPrize += 5.00
    else return -1

    extras.whippedCream ? totalPrize+= 0.50 : totalPrize+=0
    extras.extraShot ? totalPrize+= 0.75 : totalPrize+=0

    return totalPrize

    //optimized
    /*export function calculateCoffeePrice(size, type, extras = {}) {
        // 1. Define Price Maps (Lookup Tables)
        const prices = {
            size: { small: 3.00, medium: 4.00, large: 5.00 },
            type: { regular: 0.00, latte: 1.00, cappuccino: 1.50, mocha: 2.00 }
        };

        // 2. Validation: Check if the keys exist in our maps
        if (!prices.size[size] || !prices.type[type]) {
            return -1;
        }

        // 3. Calculate Base
        let total = prices.size[size] + prices.type[type];

        // 4. Add Extras (Cleaner logic)
        if (extras.whippedCream) total += 0.50;
        if (extras.extraShot)    total += 0.75;

        // 5. Final Rounding (Crucial for JS Math)
        return Math.round(total * 100) / 100;
    }*/

}
