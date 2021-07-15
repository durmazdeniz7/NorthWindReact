import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Button, Card, Image } from 'semantic-ui-react'
import ProductService from '../services/productServices';

export default function ProductDetails() {

  let { name } = useParams()
  const [product, setproduct] = useState({})
  useEffect(() => { //fluttter setState
    let productService = new ProductService()

    productService.getProductByName(name).then(result => setproduct(result.data.data))

  }, []);



  return (
    <div>

      <Card.Group>


        <Card size="large" fluid>

          <Card.Content>
            <Image
              floated='right'
              size='mini'
              src='/images/avatar/large/jenny.jpg'
            />
            <Card.Header>{product.productName}</Card.Header>
            <Card.Meta>New User</Card.Meta>
            <Card.Description>
              {product.quantityPerUnit}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className='ui two buttons'>
              <Button basic color='green'>
                Approve
              </Button>
              <Button basic color='red'>
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
  )
}
