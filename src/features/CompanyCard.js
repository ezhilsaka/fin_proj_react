import { Card, CardTitle, CardText, Button } from 'reactstrap'

const CompanyCard = ({symbol}) => {
    const value = Math.random() * 100 ;

    return (
        <Card>
            <CardTitle>
               <h5>{symbol}</h5>
               <h6>{"$" + value}</h6>
            </CardTitle>
        </Card>
    )
}

export default CompanyCard;