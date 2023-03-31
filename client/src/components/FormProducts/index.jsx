import { useState } from 'react';
import { Container } from './style';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useForm } from "react-hook-form";

export function FormProducts() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [isRegister, setIsRegister ] = useState(true);
  
  function onSubmit(data) {
    console.log(data);
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Produto</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Nome do produto" 
            {...register("name", { 
              required: "Campo obrigatório",
              pattern: {value: /[A-Za-z]/, message: "Somente texto é permitido"}, 
              maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
            })}
          />
          {errors.name && <span className='error'>{errors.name.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="desciption">
          <Form.Label>Descrição</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Descreva detalhes do produto"
            {...register("description", { 
              required: "Campo obrigatório", 
              maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
            })} 
          />
          {errors.description && <span className='error'>{errors.description.message}</span>}
        </Form.Group>
        
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="price">
          <Form.Label>Preço</Form.Label>
            <Form.Control 
              type="number"
              step={0.1}
              min = {0}
              placeholder="R$"
              inputMode='numeric'
              autoComplete='cc-number'
              {...register("price", { 
                required: "Campo obrigatório",
                pattern: {value: /[0-9]/, message: "Somente números é permitido"}, 
                maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
              })}
            />
            {errors.price && <span className='error'>{errors.price.message}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="amount">
            <Form.Label>Quantidade</Form.Label>
            <Form.Control 
              type="number"
              step={1}
              min = {0}
              placeholder="Unidades"
              inputMode='numeric'
              autoComplete='cc-number'
              {...register("amount", { 
                required: "Campo obrigatório",
                pattern: {value: /[0-9]/, message: "Somente números é permitido"}, 
                maxLength: {value: 60, message: "Número máximo de caracteres é 60"}
              })}
            />
            {errors.amount && <span className='error'>{errors.amount.message}</span>}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="expiresIn">
          <Form.Label>Data de vencimento</Form.Label>
          <Form.Control 
            type="date" 
            {...register("expiresIn", { 
              required: "Campo obrigatório",
              pattern: {value: /\d{4}[/-]\d{2}[/-]\d{2}/, message: "Insira uma data válida"}, 
              maxLength: {value: 10, message: "Número máximo de caracteres é 10"}
            })}
          />
          {errors.expiresIn && <span className='error'>{errors.expiresIn.message}</span>}
        </Form.Group>

        <Form.Group className="mb-3" controlId="linkImage">
          <Form.Label>Imagem</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Link da imagem" 
            {...register("linkImage", { 
              required: "Campo obrigatório", 
              maxLength: {value: 2083, message: "Tamanho máximo da URL é de 2083 caracteres"}
            })}
          />
          {errors.linkImage && <span className='error'>{errors.linkImage.message}</span>}
        </Form.Group>
          <Modal.Footer>
            {isRegister ?
                <Button variant="primary" type="submit" style={{
                  marginTop: "1.6rem",
                  width: "100%",
                  padding: ".4rem",
                  fontSize: "1.4rem" 
                }}>
                Cadastrar
              </Button> 
              :
              <>
                <Button variant="danger" onClick={() => deleteStudent(studentData.id)}>
                    Deletar
                </Button>
                <Button variant="primary" type="submit">
                    Atualizar
                </Button>
              </>
            }
          </Modal.Footer>
        </Form>
    </Container>
  );
}