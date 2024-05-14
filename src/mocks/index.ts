import { CheckoutInterface } from "@/types";

export const checkoutMock: CheckoutInterface = {
  subtotal: 2000,
  freight: 100,
  total: 2100,
  status: 'processing',
  payment: {
    card: {
      number: '4111 1111 1111 1111',
      holder: 'Giovane Ferreira',
      expiration: '03/30',
      cvv: '737'
    }
  },
  coupon: null,
  customer: {
    id: 1,
    name: 'Eudes Ferreira',
    email: 'eudes.ferreira@madeiramadeira.com.br'
  },
  delivery: {
    address: 'Rua Marechal Deodoro, 717',
    neighborhood: 'Centro',
    city: 'Curitiba',
    state: 'PR',
    zipcode: '80020-320'
  },
  items: [
    {
      id: 174028,
    },
    {
      id: 174030,
    },
    {
      id: 550858,
    }
  ]
}