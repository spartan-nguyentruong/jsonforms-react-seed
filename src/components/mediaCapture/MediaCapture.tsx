import { Component, Fragment } from 'react';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import "./MediaCapture.css";
import { preview_image } from './resize_base64_image.js';

interface MyProps {
    label: string;
    path: string;
    updateValue: (newValue: string) => void;
    value: number;
}
  
interface MyState {
    images: any
}

export class MediaCapture extends Component<MyProps, MyState> {
    constructor(props: any){  
        super(props);
        this.state = {
            images: props.value !== undefined ? props.value : []
        };
    }

    handleCapture = ({}) => {
        preview_image(this);
    };
    // handleCapture2 = ({ target }) => {
    //     var fileReader
    //     Array.from(target.files).forEach(file => {
    //         fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);
    //         fileReader.onload = (e) => {
    //             this.setState((prevState) => ({
    //                 ['images']: [...prevState['images'], e.target.result]
    //             }));
    //             this.props.updateValue(this.state.images)
    //         };
    //     });
    // };

    render() {
        return (
            <Fragment>
                <p className="para">
                    {this.props.label}
                </p>
                <input
                    accept="image/*"
                    style={{ display: 'none' }}
                    id={`icon_${this.props.path}`}
                    onChange={this.handleCapture}
                    type="file"
                    multiple
                />
                <label htmlFor={`icon_${this.props.path}`} className="icon-button-photo">
                    <PhotoCamera />
                </label>
                <>
                    {this.state.images.map((photo:string, i:number) =>
                        <img 
                            src={photo} 
                            width='100'
                            style={{ 
                                border: '2px solid #aaa',
                                marginRight: '2px'
                            }}
                            key={`${this.props.path}_${i}`}
                        />
                    )}
                </>
            </Fragment>
        );
    }
}