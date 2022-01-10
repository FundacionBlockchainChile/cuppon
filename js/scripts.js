$(function () {
  'use strict'
  let $cardContainer = $('#cardContainer')

  let $products = [
    {
      imgUrl: './asstes/img/cupon-1.jpg',
      title: 'Plumón Coral Fleece estampado en modelo y tamaño a elección',
      storeName: 'Plumones Manolino',
      address: '9191 Avenida Vitacura, Chile',
      price: '$45.990',
      offer: '$22.990',
    },
    {
      imgUrl: './asstes/img/cupon-2.jpg',
      title: 'Entrada para compartir + platos de fondo + postres + bebestibles',
      storeName: 'V for Vegan',
      address: '777 Jesse Pinkman, Chile',
      price: '$30.990',
      offer: '$12.990',
    },
    {
      imgUrl: './asstes/img/cupon-3.jpg',
      title:
        'Evaluación integral + blanqueamiento dental led + limpieza + fluoración',
      storeName: 'Clínica Dental Quijada',
      address: '1342, Blanco Encalada, Chile',
      price: '$300.000',
      offer: '$25.990',
    },
    {
      imgUrl: './asstes/img/cupon-4.jpg',
      title: 'Colación para 2 personas + postre (no incluye bebidas)',
      storeName: 'Suricata almacen',
      address: '1071 Miguel Claro, Chile',
      price: '$4.200',
      offer: '$2.100',
    },
    {
      imgUrl: './asstes/img/cupon-5.jpg',
      title: '1, 2 o 4 tickets para Stukids. Elige sucursal',
      storeName: 'Stukids Centro de Eventos',
      address: '133 El tranque, Chile',
      price: '$4.000',
      offer: '$2.500',
    },
    {
      imgUrl: './asstes/img/cupon-6.jpg',
      title: 'San Pedro de Atacama : 1 o 2 noches en alojamiento a elección',
      storeName: 'D-Latam Travel',
      address: '',
      price: '$80.200',
      offer: '$44.100',
    },
  ]

  $.each($products, (index, item) => {
    $cardContainer.append(
      `<div class="col mb-4">
          <div class="card h-100 shadow green_glow ">
            <img
              src="${item.imgUrl}"
              class="card-img-top brighten"
              alt="${item.title}"
            />
            <div class="card-body">
              <h5 class="title">
                ${item.title}
              </h5>
              <div class="storeInfo">
                <h5 class="storeName">${item.storeName}</h5>
                <p class="storeAddress">${item.address}</p>
              </div>
              <div class="my_row cupponPrices">
                <p class="price">${item.price}</p>
                <p class="offer">${item.offer}</p>
              </div>
            </div>
          </div>
        </div>`
    )
  })
})
