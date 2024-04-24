import { useState } from "react"

function ShoppingCartPage() {
  const [quantity, setQuantity] = useState(0)
  const [cep, setCep] = useState('')
  const [shippingCost, setShippingCost] = useState(0)

  const handleAddQuantity = () => {
    setQuantity(quantity + 1)
  }

  const handleRemoveQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  const handleDelete = () => {
    console.log('Produto deletado')
  }

  const handleCalculateShipping = () => {
    const calculatedShippingCost = 10
    setShippingCost(calculatedShippingCost)
  }

  return (
    <>
      <div className="cart">
        <div className="container">
          <div className="cart-detail">
            <ul className="cart__products">
              <div className="cart__item">
                <div className="ProductSection__item">
                  <img src="" alt="" className="ProductSection__image" />
                  <div className="ProductSection__info">
                    <h3 className="ProductSection__productName">dfasd</h3>
                    <p className="ProductSection__productDescription">fasdfas</p>
                    <p className="ProductSection__productPrice">13213</p>
                    <div>
                      <button onClick={handleRemoveQuantity}>-</button>
                      <span>{quantity}</span>
                      <button onClick={handleAddQuantity}>+</button>
                      <button onClick={handleDelete}>🗑️</button>
                    </div>
                    <div>
                      <input
                        type="text"
                        placeholder="CEP"
                        value={cep}
                        onChange={(e) => setCep(e.target.value)}
                      />
                      <button onClick={handleCalculateShipping}>Calcular Frete</button>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            <div className="cart__total">
              Total do carrinho: 20
            </div>
            <div className="cart__total">
              Custo de Envio: ${shippingCost}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShoppingCartPage
