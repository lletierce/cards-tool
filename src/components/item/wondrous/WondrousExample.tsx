import { PropsWithChildren } from "react"

type Props = PropsWithChildren<{
    classname?: string,
}>

export default function WondrousExample({classname} : Props) {
  return (
    <div className={classname}>
        <div>Poche d'herbes infinies</div>
        <div>14 Rare</div>
        <div>Cette poche contient une petite quantité infinie de racines d'arbres, de
        feuilles et de mousses rares récoltées durant certaines phases lunaires.</div>
        <div>21000</div>
        <div>A la fin de chaque repos long, des herbes rares d'une valeur de 50 pièces
          d'or apparaissent dans la poche. La poche peut contenir jusqu'à un maximum
          de 700 pièces d'or d'herbres rares. Ces herbres peuvent être utilisées pour exécuter
          des rituels nécessitant un test de nature et n'étant pas des rituels de création. Les 
          herbres rares disparaissent peu de temps après la sortie de la poche si elle ne 
          sont pas utilisée comme composants de rituels. </div>
    </div>
  )
}
