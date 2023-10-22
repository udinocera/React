import { UseLogin } from "./UseLogin"

export function Login(){
const {formData, handleInputChange, handleSubmit} = UseLogin();

  return(
    <>
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={formData.username} onChange={handleInputChange}/>
      <input type="password" name="password" value={formData.password} onChange={handleInputChange} />
      <button type="submit">Invio</button>
    </form>
    </>
  )
}

