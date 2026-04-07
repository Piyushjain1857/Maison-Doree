import React from 'react'
import '../styles/styles.css'
import { useData } from '../../contexts/DataContext.jsx'

const OurStory = () => {
  const data = useData();
  const { storyConfig } = data;
    return (
        <div>
            <section className="story" id="story">
                <div className="container">
                    <div className="story-grid">
                        <div className="story-content">
                            <p className="text-label story-label">Our Heritage</p>
                            <h2 className="heading-display story-title">
                                {storyConfig.title}
                            </h2>
                            {storyConfig.texts.map((text, index) => (
                              <p key={index} className="text-body story-text">
                                {text}
                              </p>
                            ))}
                            <div className="story-signature">
                                <p className="signature-name">{storyConfig.signature.name}</p>
                                <p className="signature-title">{storyConfig.signature.title}</p>
                            </div>
                        </div>
                        <div className="story-images">
                            {storyConfig.images.map((img, index) => (
                              <div key={index} className="story-image">
                                <img src={img} alt={`Story image ${index + 1}`} />
                              </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default OurStory
