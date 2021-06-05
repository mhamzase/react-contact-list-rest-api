import React,{useState} from 'react'

function ContactCard(props) {

    const [showAge, setShowAge] = useState(false)

    return (
        <div>
            <div className='contact-card'>
			<img src={props.avatarUrl} alt='profile' />
			<div className='user-details'>
				<p>Name: {props.name}</p>
				<p>Email: {props.email}</p>
				<button onClick={()=> setShowAge(!showAge)}>Toggle Age </button>
				{showAge ? <span>&nbsp;Age: {props.age}</span> : null}
			</div>
		</div>
        </div>
    )
}

export default ContactCard
