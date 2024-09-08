// +++

// Перешите интерфейс ICustomer разбив его
// на отдельные подинтерфейсы. Структуру и нейминг
// полей вы можете менять на свое усмотрение.

enum paymentType {
    "cash",
    "card",
    "credit",
  }

enum currency {
  "EUR",
  "USD",
  "RUB",
}
  interface ICustomer {
    names: Inames;
    dateBirthday: Date;
    delivery: IDelivery;
    paymentType: paymentType;
    ordersCount: number;
    discountPercent: number;
    currency: currency;
  }
  interface Inames {
    firstName: string;
    lastName: string;
  }
  interface IDelivery {
    deliveryCountry: string;
    deliveryCity: string;
    deliveryAddress: string;
    deliveryBuilding: number | string;
    deliveryApartment?: number;
    detiveryTime?: string;
  }

  let www: ICustomer = {
    names: {
      firstName: '111',
      lastName: '12'
    },
    delivery: {
      deliveryCountry: '123',
      deliveryAddress: '123244',
      deliveryBuilding: 123,
      deliveryCity: 'vvgf',
    },
    paymentType: paymentType.credit,
    ordersCount: 5,
    discountPercent: 6,
    currency: currency.EUR,
    dateBirthday: new Date(),

  }


