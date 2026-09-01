type GrettingsProps = {
    secretIdentity: string;
    wife: string;
    mainEnemy: string;
    teamFlash: string[];
    powers: string[];
  }
    
  export function Grettings({ secretIdentity, wife, mainEnemy, teamFlash, powers }: GrettingsProps) {
    return (
      <div className="tarjeta-flash">
        <h2>⚡ Archivos Secretos de S.T.A.R. Labs ⚡</h2>
        
        <p><strong>Identidad Secreta:</strong> {secretIdentity}</p>
        <p><strong>Familia (Esposa):</strong> {wife}</p>
        <p><strong>Enemigo Principal:</strong> {mainEnemy}</p>
        
        <hr />
  
        <h3>Compañeros (Team Flash):</h3>
        <ul>
          {teamFlash.map((friend, index) => (
            <li key={index}>{friend}</li>
          ))}
        </ul>
  
        <h3>Habilidades Meta-humanas:</h3>
        <ul>
          {powers.map((power, index) => (
            <li key={index}>{power}</li>
          ))}
        </ul>
      </div>
    )
  }