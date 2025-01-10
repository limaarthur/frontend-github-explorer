import logoImg from "../../assets/logo.svg"
import { Form, Repositories, Title } from "./styles"

export function Dashboard() {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" type="text" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img src="" alt="" />

          <div>
            <strong></strong>

            <p></p>
          </div>
        </a>
      </Repositories>
    </>

  )
}