import { ShopProfile } from "@/app/lib/components/interfaces"

const ShopProfileMock = (): ShopProfile => {
    return {
        "id": 1,
        "qrCode": "1234",
        "name": "Perim",
        "address": {
            "street": "Rua das Flores",
            "number": 123,
            "neighborhood": "Centro",
            "city": "São Paulo",
            "state": "SP",
            "zipCode": "01000-000"
        },
        "contact": {
            "phone": "(11) 1234-5678",
            "email": "contato@lojaexemplo.com",
            "website": "https://www.lojaexemplo.com"
        },
        "hours": {
            "mondayToFriday": "08:00 - 18:00",
            "saturday": "08:00 - 14:00",
            "sunday": "Closed"
        },
        "rating": {
            "average": 4.5,
            "comments": [
                {
                    "user": "Carlos Silva",
                    "comment": "Great service and quality products.",
                    "rating": 5
                },
                {
                    "user": "Mariana Oliveira",
                    "comment": "I really liked the store, but I found the price a bit high.",
                    "rating": 4
                }
            ]
        }
    }
}

export default ShopProfileMock
