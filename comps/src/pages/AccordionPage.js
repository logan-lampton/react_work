import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: '1',
            label: 'Can I use React on a project?',
            content: 'Yes, you can!'
        },
        {
            id: '2',
            label: 'This is the best label',
            content: 'Oh, totes, bro!'
        },
        {
            id: '3',
            label: 'Can pigs fly?',
            content: `I don't place labels on swine!`
        }
    ];
    
    return ( 
        <Accordion items={items} />
    )
}

export default AccordionPage;