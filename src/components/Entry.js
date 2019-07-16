import React, { Component } from 'react'

export default class Entry extends Component {
    render() {
        return (
            <>
                <section className="entries">
                    <div className="entries__center">
                        <article className="entries__title">
                            <h1 className="entries__title-red">Recent</h1>
                            <h1 className="entries__title-blue">Blog Entries</h1>
                            <p className="entries__title-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci consectetur autem fugit enim velit. Laborum maxime, ex voluptatibus quae quas magni saepe. Quos alias numquam laboriosam maiores id quod cumque!</p>
                        </article>
                    </div>
                </section>

            </>
        )
    }
}
