// region Basic Enums

enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;
function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.PENDING);

// enum也可以是字串的列舉，並且可以擁有不同型別
enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
  ERROR = 234,
}
// end region Basic Enums
