Feature: Checkout Process
    Scenario: Add item to cart and proceed to checkout
        Given I am on the product page
        When I add the product to the cart
        And I click on the cart icon
        Then I should see the product in the cart
        When I click on the checkout button
        Then I should be taken to the checkout page