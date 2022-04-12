const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
  const deliveryPerson = order.order.delivery.deliveryPerson;
  const remetente = order['name'];
  const contato = order['phoneNumber'];
  const endereçoP1 = order.address['street'];
  const endereçoP2 = order.address['number'];
  const endereçoP3 = order.address['apartment'];

  console.log(`Olá ${deliveryPerson}, entrega para: ${remetente}, Telefone:${contato}, ${endereçoP1}, Nº:${endereçoP2}, AP:${endereçoP3}.`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
  order['name'] = 'Luiz Silva';
  order.payment['total'] = 50
  const nome = order['name'];
  const valor = order.payment['total'];
  const pizzas = Object.keys(order.order.pizza);
  const bebida = order.order.drinks.coke.type;

  console.log(`Olá ${nome}, o total do seu pedido de ${pizzas[0]}, ${pizzas[1]} e ${bebida} é R$ ${valor},00.`)
  }
  
  orderModifier(order);