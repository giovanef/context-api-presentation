import { CheckoutInterface } from "@/types";

interface ResponseDataInterface {
  orderId: string;
}

interface SuccessResponseInterface {
  success: true;
  data: ResponseDataInterface
}

interface ErrorResponseInterface {
  success: false;
  data: null;
}

type ResponseType = SuccessResponseInterface | ErrorResponseInterface;

export const fetchPay = async (checkoutData: CheckoutInterface): Promise<ResponseType> => {
  const { payment, ...checkout } = checkoutData;
  
  const url = 'http://localhost:3000/order';

  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify(checkout)
  })

  if (!response.ok) {
    return {
      success: false,
      data: null
    }
  }

  const responseJson = await response.json();
  return {
    success: true,
    data: responseJson
  };
}