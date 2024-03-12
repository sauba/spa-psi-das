import { CheckCircle } from "@phosphor-icons/react"
import { FcSurvey } from "react-icons/fc"

interface IPatient {
  id: string
  registrationDate: Date
  appointmentTime: string
  name: string
  cellPhone: string
  telephone?: string
  phoneMessage?: string
  dateOfBirth: Date
  age: number
  gender: string
  natural?: string
  maritalStatus?: string
  religion?: string
  schooling?: string
  occupation?: string
  address: string
  houseNumber: number
  addressComplement: string
  neighborhood: string
  city: string
  state: string
  daddyName?: string
  daddyAge?: number
  daddyOccupation?: string
  daddyInstructionLevel?: string
  motherName?: string
  motherAge?: number
  motherOccupation?: string
  motherInstructionLevel?: string
  numberOfBrothers?: number
  positionInBirthOrder?: string
  forwarded?: string
  consultationReason?: string
  considerations?: string
  accessGranted: boolean
}

export default function Patient() {
  return (
    <div
      className={`w-full justify-center items-center font-black text-zinc-300 bg-zinc-900/25 p-4`}
      id="fichaPaciente"
    >
      <form>
        <div className={`flex justify-center items-center`}>
          <FcSurvey size={48} />
          <h1 className={`font-black text-2xl`}>FICHA DE ENTREVISTA INICIAL</h1>
        </div>

        <div>
          <h1 className="text-left p-2 bg-gradient-to-r from-rose-600 text-teal-500 rounded-md">
            DADOS PESSOAIS
          </h1>
        </div>

        <div className={`pt-4 bg-zinc-800`}>
          <div className={`flex justify-evenly`}>
            <label htmlFor="paciente">Paciente:</label>
            <input
              required
              type="text"
              name="paciente"
              id="paciente"
              className={`w-full text-center`}
              placeholder="Nome do Paciente"
            />
          </div>

          <div
            className={`flex flex-wrap justify-start items-center pt-4 gap-5`}
          >
            <div className={`flex justify-start gap-9`}>
              <label htmlFor="dateOfBirth">Data de Nascimento:</label>
              <input
                required
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                className={`text-center`}
              />
            </div>

            <div className={`flex justify-start md:justify-end gap-3`}>
              <label htmlFor="age">Idade:</label>
              <input
                required
                type="number"
                className={`w-1/5`}
                name="age"
                id="age"
                max={120}
              />
            </div>

            <div className={`flex justify-start`}>
              <label htmlFor="gender">Sexo:</label>
              <select name="gender" id="gender" className={`text-center`}>
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
              </select>
            </div>

            <div className={`flex justify-end gap-12`}>
              <label htmlFor="orientacaoSexual">Orientação Sexual:</label>
              <select
                name="orientacaoSexual"
                id="orientacaoSexual"
                className={`text-center`}
              >
                <option value="Heterossexual">Heterossexual</option>
                <option value="Homossexual">Homossexual</option>
                <option value="Bissexual">Bissexual</option>
                <option value="Assexual">Assexual</option>
                <option value="Pansexual">Pansexual</option>
              </select>
            </div>
          </div>

          <div
            className={`flex flex-wrap justify-start items-center pt-4 gap-3`}
          >
            <div className={`flex justify-start`}>
              <label htmlFor="natural">Naturalidade:</label>
              <input required type="text" name="natural" id="natural" />
            </div>

            <div className={`flex justify-center items-center gap-2`}>
              <label htmlFor="estadoCivil">Estado Civil:</label>
              <select name="estadoCivil" id="estadoCivil">
                viúvo
                <option value="Solteiro">Solteiro</option>
                <option value="Casado">Casado</option>
                <option value="Separado">Separado</option>
                <option value="Divorciado">Divorciado</option>
                <option value="Viúvo">Viúvo</option>
              </select>
            </div>
            <div className={`flex justify-center items-center gap-2`}>
              <label htmlFor="religion">Religião:</label>
              <select name="religion" id="religion" className={`text-center`}>
                <option value="Budismo">Budismo</option>
                <option value="Catolico">Católico</option>
                <option value="Espiritismo">Espiritismo</option>
                <option value="Evangelico">Evangélico</option>
                <option value="Islamismo">Islamismo</option>
                <option value="Judaismo">Judaísmo</option>
                <option value="Santo Daime">Santo Daime</option>
                <option value="Umbanda">Umbanda</option>
              </select>
            </div>

            <div className={`flex justify-end gap-12`}>
              <label htmlFor="selectSchooling">Escolaridade:</label>
              <select name="selectSchooling" id="selectSchooling">
                <option value="Analfabeto">Analfabeto</option>
                <option value="Até 5º Ano Incompleto">
                  Até 5º Ano Incompleto
                </option>
                <option value="5º Ano Completo">5º Ano Completo</option>
                <option value="6º ao 9º Ano do Fundamental">
                  6º ao 9º Ano do Fundamental
                </option>
                <option value="Fundamental Completo">
                  Fundamental Completo
                </option>
                <option value="Médio Incompleto">Médio Incompleto</option>
                <option value="Médio Completo">Médio Completo</option>
                <option value="Superior Incompleto">Superior Incompleto</option>
                <option value="Superior Completo">Superior Completo</option>
                <option value="Mestrado">Mestrado</option>
                <option value="Doutorado">Doutorado</option>
                <option value="Ignorado">Ignorado</option>
              </select>
            </div>
            <div
              className={`flex w-full justify-start items-center gap-9 md:gap-7`}
            >
              <label htmlFor="occupation">Profissão:</label>
              <input
                required
                type="text"
                name="occupation"
                id="occupation"
                className={`w-full text-sm px-2`}
              />
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-left p-2 mt-4 bg-gradient-to-r from-rose-600 text-teal-500 rounded-md">
            DADOS FAMILIARES
          </h1>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-3 py-4`}>
          <div className={`flex flex-col gap-5`}>
            <div className={`flex justify-start gap-5`}>
              <label htmlFor="nomePai">Nome do Pai:</label>
              <input
                required
                type="text"
                name="nomePai"
                id="nomePai"
                className={`w-8/12 md:w-9/12 text-center`}
              />
            </div>

            <div className={`flex justify-start`}>
              <div className={`flex gap-3`}>
                <label htmlFor="fatherAge">Idade:</label>
                <input
                  required
                  type="number"
                  name="fatherAge"
                  id="fatherAge"
                  className={`w-2/5 text-center`}
                  max={120}
                />
              </div>

              <div className={`flex gap-1`}>
                <label htmlFor="ocupacaoPai">Ocupação:</label>
                <input
                  required
                  type="text"
                  name="ocupacaoPai"
                  id="ocupacaoPai"
                  className={`text-center`}
                />
              </div>
            </div>

            <div className={`flex justify-start gap-3`}>
              <label htmlFor="instrucaoPai">Nível de Instrução:</label>
              <input
                required
                type="text"
                name="instrucaoPai"
                id="instrucaoPai"
                className={`w-6/12 md:w-8/12`}
              />
            </div>
          </div>

          <div className={`flex flex-col mt-4 md:mt-0 gap-5`}>
            <div className={`flex justify-start gap-5`}>
              <label htmlFor="nomeMae">Nome da Mãe:</label>
              <input
                required
                type="text"
                name="nomeMae"
                id="nomeMae"
                className={`w-3/5`}
              />
            </div>

            <div className={`flex justify-start`}>
              <div className={`flex gap-3`}>
                <label htmlFor="motherAge">Idade:</label>
                <input
                  required
                  type="number"
                  name="motherAge"
                  id="motherAge"
                  className={`w-2/5 text-center`}
                  max={120}
                />
              </div>

              <div className={`flex gap-3`}>
                <label htmlFor="ocupacaoMae">Ocupação:</label>
                <input
                  required
                  type="text"
                  name="ocupacaoMae"
                  id="ocupacaoMae"
                  className={`text-center`}
                />
              </div>
            </div>

            <div className={`flex gap-3`}>
              <label htmlFor="instrucaoMae">Nível de Instrução:</label>
              <input
                required
                type="text"
                name="instrucaoMae"
                id="instrucaoMae"
              />
            </div>
          </div>
        </div>

        <div className={``}>
          <h1 className="text-left p-2 mt-4 bg-gradient-to-r from-rose-600 text-teal-500 rounded-md">
            ENDEREÇO E CONTATOS
          </h1>
        </div>

        <div
          className={`flex flex-col tracking-widest items-start bg-zinc-800/50 my-4`}
        >
          <div className={`flex-col md:flex justify-start w-full`}>
            <div className={`flex pb-6 gap-3`}>
              <label htmlFor="address">Endereço:</label>
              <input
                required
                type="text"
                name="address"
                id="address"
                className={`text-center w-full`}
              />
            </div>

            <div className={`flex flex-col md:flex`}>
              <div className={`flex gap-8`}>
                <label htmlFor="numeroDoEndereco">Número:</label>
                <input
                  required
                  type="text"
                  name="numeroDoEndereco"
                  id="numeroDoEndereco"
                  className={`text-left`}
                  max={99999}
                />
              </div>

              <div className={`flex gap-3 pt-6`}>
                <label htmlFor="complemento">Complemento:</label>
                <input
                  required
                  type="text"
                  name="complemento"
                  id="complemento"
                  className={`text-center w-full`}
                />
              </div>
            </div>
          </div>

          <div className={`flex flex-wrap justify-start gap-5 pt-6`}>
            <div className={`flex`}>
              <label htmlFor="cep">CEP:</label>
              <input
                required
                type="text"
                name="cep"
                id="cep"
                className={`text-center w-full`}
              />
            </div>

            <div className={`flex`}>
              <label htmlFor="bairro">Bairro:</label>
              <input
                required
                type="text"
                name="bairro"
                id="bairro"
                className={`text-center w-full`}
              />
            </div>

            <div className={`flex`}>
              <label htmlFor="cidade">Cidade:</label>
              <input
                required
                type="text"
                name="cidade"
                id="cidade"
                className={`text-center w-full`}
              />
            </div>

            <div className={`flex`}>
              <label htmlFor="estado">Estado:</label>
              <select
                name="estado"
                id="estado"
                className={`text-center text-zinc-800`}
              >
                <option value="">Selecione</option>
                <option value="AC">Acre</option>
                <option value="AL">Alagoas</option>
                <option value="AP">Amapá</option>
                <option value="AM">Amazonas</option>
                <option value="BA">Bahia</option>
                <option value="CE">Ceará</option>
                <option value="DF">Distrito Federal</option>
                <option value="ES">Espírito Santo</option>
                <option value="GO">Goiás</option>
                <option value="MA">Maranhão</option>
                <option value="MT">Mato Grosso</option>
                <option value="MS">Mato Grosso do Sul</option>
                <option value="MG">Minas Gerais</option>
                <option value="PA">Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
                <option value="ZZ">Outro País</option>
              </select>
            </div>

            <div className={`md:flex justify-around items-center gap-24`}>
              <div className={`flex py-2`}>
                <label htmlFor="celular">Celular:</label>
                <input
                  required
                  type="text"
                  name="celular"
                  id="celular"
                  className={`text-center w-full`}
                />
              </div>

              <div className={`flex py-2`}>
                <label htmlFor="telefone">Telefone:</label>
                <input
                  required
                  type="text"
                  name="telefone"
                  id="telefone"
                  className={`text-center w-full`}
                />
              </div>

              <div className={`flex gap-1 md:gap-3`}>
                <label htmlFor="email">E-mail:</label>
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  className={`text-center w-96`}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-left p-2 mt-4 bg-gradient-to-r from-rose-600 text-teal-500 rounded-md">
              ENCAMINHAMENTO
            </h1>
          </div>

          <div>
            <select
              name="encaminhado"
              id="encaminhado"
              className={`my-4 bg-zinc-800 text-center hover:cursor-pointer hover:font-black`}
            >
              <option value="semEncaminhamento">Sem Encaminhamento</option>
              <option value="">Dr. Fulano de Tal</option>
              <option value="">Dr. Beltrano Daquilo</option>
              <option value="">Dra. Roseli</option>
              <option value="">Dra. Zuleica Zulu</option>
              <option value="">Dra. Zingara Manzinni</option>
            </select>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 gap-5 my-4`}>
            <div>
              <h1 className={`text-center`}>MOTIVO DA CONSULTA</h1>
              <textarea
                name="motivoConsulta"
                id="motivoConsulta"
                cols={30}
                rows={10}
                className={`w-full p-4 text-white bg-zinc-400/50 border-8 border-zinc-900 rounded-xl outline-green-500 text-center tracking-widest overflow-hidden`}
              ></textarea>
            </div>

            <div>
              <h1 className={`text-center`}>CONSIDERAÇÕES</h1>
              <textarea
                name="consideracoes"
                id="consideracoes"
                cols={30}
                rows={10}
                className={`w-full p-4 text-white bg-zinc-400/50 border-8 border-zinc-900 rounded-xl outline-green-500 text-center tracking-widest overflow-hidden`}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full flex justify-center items-center gap-2 p-2 border-8 border-zinc-900 text-white tracking-widest bg-green-900 hover:bg-green-500/50 hover:text-green-500 hover:font-black rounded-md`}
            >
              <CheckCircle size={32} weight="bold" className={``} />
              Salvar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
