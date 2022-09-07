import { IoEllipsisHorizontalCircleOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";


const Posts = () => {
    return(
        <div className="posts">
            <div className="post">
                <div className="space-between post-header">
                    <div className="smallpeople">
                        <img src="img/meowed 2.png" />
                        <div className="font14 align-center bold500">meowed</div>
                    </div>
                    <IoEllipsisHorizontalCircleOutline />
                </div>
                <img className="postimg" src="img/gato-telefone 1.png" alt="Gato telefone" />
                <div className="postfooter">
                    <div className="space-between">
                        <div className="gap13">
                            <IoHeartOutline />
                            <IoChatbubbleOutline />
                            <IoPaperPlaneOutline />
                        </div>
                        <div>
                            <IoBookmarkOutline />
                        </div>
                    </div>
                    <div className="postfooterline2">
                        <img className="verysmallicon" src="img/respondeai 2.png" />
                        <div className="font14">Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong></div>
                    </div>
                </div>
            </div>
            <div className="post">
                <div className="space-between post-header">
                    <div className="smallpeople">
                        <img src="img/barked 2.png" />
                        <div className="font14 align-center bold500">barked</div>
                    </div>
                    <IoEllipsisHorizontalCircleOutline />
                </div>
                <img className="postimg" src="https://i.imgur.com/HTr2qe2.png" alt="Dog" />
                <div className="postfooter">
                    <div className="space-between">
                        <div className="gap13">
                            <IoHeartOutline />
                            <IoChatbubbleOutline />
                            <IoPaperPlaneOutline />
                        </div>
                        <div>
                            <IoBookmarkOutline />
                        </div>
                    </div>
                    <div className="postfooterline2">
                        <img className="verysmallicon" src ="img/adorableanimals2.png" />
                        <div className="font14">Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Posts;