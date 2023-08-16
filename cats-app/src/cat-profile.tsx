import './cat-profile.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import grumpycat from './cats/grumpy-cat.jpg';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import garfield from './cats/garfield.png';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import sylvester from './cats/sylvester.png';

export const CatProfile = function ({ cat }: { cat?: string }) {
    return (
        <div style={{ margin: 60 + 'px' }}>
            <h1>My cat profile</h1>
            <form>
                <div className="favourite-cat">
                    <legend>My favourite cat is</legend>
                    <label>
                        <input type="radio" name="cats" value="grumpy-cat" />
                        Grumpy Cat
                    </label>
                    <label>
                        <input type="radio" name="cats" value="garfield" />
                        Garfield
                    </label>
                    <label>
                        <input type="radio" name="cats" value="sylvester" />
                        Sylvester
                    </label>
                    <img src={''} className="favourite-cat__image" alt="" />
                </div>
                <div>
                    <label>Food my cat likes</label>
                    <input data-testid="food-input" />
                    <button className="button button--secondary">
                        Add food
                    </button>
                    <ul>
                        {/* TODO: show the list of foods added */}
                    </ul>
                </div>
                <button type="submit" className="button button--primary">Submit</button>
            </form>
        </div>
    );
};
