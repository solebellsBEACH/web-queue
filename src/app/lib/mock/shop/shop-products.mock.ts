import { ShopProducts } from "@/app/lib/components/interfaces"

export const ShopProductsMock = (): ShopProducts => {
    return {
        "id": 1,
        "qrCode": "1234",
        "name": "Perim",
        "hours": {
            "mondayToFriday": "08:00 - 18:00",
            "saturday": "08:00 - 14:00",
            "sunday": "Closed"
        },
        "products": [
            {
                "id": 1,
                "name": "Camiseta Exemplo",
                "category": "Roupas",
                "price": 49.99,
                "description": "Camiseta confortável para o dia a dia.",
                "stock": 50
            },
            {
                "id": 2,
                "name": "Tênis Esportivo",
                "category": "Calçados",
                "price": 199.99,
                "description": "Tênis de corrida, ideal para atividades físicas.",
                "stock": 30
            },
            {
                "id": 3,
                "name": "Jaqueta de Couro",
                "category": "Roupas",
                "price": 299.99,
                "description": "Jaqueta de couro premium para o inverno.",
                "stock": 15
            },
            {
                "id": 4,
                "name": "Mochila Resistente",
                "category": "Acessórios",
                "price": 149.99,
                "description": "Mochila com compartimentos para laptop e outros itens.",
                "stock": 20
            },
            {
                "id": 5,
                "name": "Relógio de Pulso",
                "category": "Acessórios",
                "price": 299.99,
                "description": "Relógio resistente à água e com design moderno.",
                "stock": 10
            },
            {
                "id": 6,
                "name": "Caderno de Anotações",
                "category": "Papeleria",
                "price": 19.99,
                "description": "Caderno simples para anotações diárias.",
                "stock": 100
            },
            {
                "id": 7,
                "name": "Fone de Ouvido Bluetooth",
                "category": "Eletrônicos",
                "price": 89.99,
                "description": "Fone de ouvido sem fio com boa qualidade de som.",
                "stock": 25
            },
            {
                "id": 8,
                "name": "Luminária de Mesa",
                "category": "Decoração",
                "price": 79.99,
                "description": "Luminária de mesa com design elegante.",
                "stock": 40
            },
            {
                "id": 9,
                "name": "Cafeteira Elétrica",
                "category": "Eletrodomésticos",
                "price": 249.99,
                "description": "Cafeteira elétrica para preparo rápido de café.",
                "stock": 15
            },
            {
                "id": 10,
                "name": "Cadeira Ergonômica",
                "category": "Móveis",
                "price": 499.99,
                "description": "Cadeira confortável e ergonômica para o escritório.",
                "stock": 8
            }
        ]
    }
}


export default ShopProductsMock
