import stripe
import stripe.error

stripe.api_key = 'sk_test_51PGO3vSCau3H3EDAuaVtzo73FEiKVKXw9A9QV57jAD2V6a7LBKjKgfvcfCeP61Gxa2UHgJEZu5yRQN9sYNbwIj6000t1NruG85'

async def payment_generation():
    try:
        payment_link = stripe.PaymentLink.create(
            line_items=[{"price": "price_1PGiOcSCau3H3EDApxHLAXz8", "quantity": 1 }]
        )
        print('payment link', payment_link.url)
        return payment_link.url
        
    except stripe.error.CardError as e:
        # Handle specific Stripe errors
        return {"status": "error", "message": str(e)}
    except stripe.error.StripeError as e:
        # Handle generic Stripe errors
        return {"status": "error", "message": "Something went wrong. Please try again later."}