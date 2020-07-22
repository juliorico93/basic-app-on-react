import React, { Component } from 'react'

export default class Posts extends Component {
    
    state = {
        posts: []
    }

   async componentDidMount() {
       const res =  await fetch('https://icuhelperfunctions.azurewebsites.net/api/getTokenPowerBi?code=vvanYgV6CrStwWIn0nyjAT73dOkGDa/duSDTm8bDOXPcOaYBpJ0aaw==')
       const data = await res.json();
       this.setState({posts: data})
    }

    render() {
        return (
            <div>
                <h1>post</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h1>{post.token}</h1>
                            <p>{post.body}</p>
                        </div>

                    } )
                }
            </div>
        )
    }
}
