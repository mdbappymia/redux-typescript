import { FC } from "react";

const About: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center bg-sky-50 p-10">
        <h1 className="font-bold uppercase text-3xl mt-5 mb-3">Our Misson</h1>
        <p className=" text-gray-700">
          Provide best quality service and number one orginal produce
        </p>
      </div>
      <div className="my-5">
        <h1 className="text-center font-bold text-3xl my-5">About Us</h1>
        <div className="lg:grid custom-about-grid gap-20">
          <div>
            <div className=" rounded overflow-hidden shadow-lg">
              <img
                className=" w-40 h-40 mx-auto rounded-full"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                alt="Sunset in the mountains"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                <p className="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
              illum reiciendis. Necessitatibus, esse non, eos excepturi
              voluptate error fugiat similique sapiente distinctio beatae sed
              veritatis corrupti maxime animi inventore repellendus perferendis
              praesentium velit reprehenderit temporibus dolorem, numquam ipsam?
              Ex, est. Enim, aperiam. Quis, veritatis! Nemo ea alias, eligendi
              pariatur ab nihil cumque voluptates iusto doloribus harum autem,
              laborum sunt expedita aut accusamus, ducimus quia veniam
              consequuntur maxime similique. Delectus eius facilis non nesciunt
              ratione iusto ullam impedit voluptatem dignissimos dicta error
              illum reiciendis necessitatibus laborum modi qui consequatur nisi
              magni saepe nihil, aperiam ducimus commodi neque alias. Dolor,
              sunt illo!
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quo
              assumenda iure fugit, quae fuga. Reiciendis laboriosam dolor omnis
              nemo maiores id nobis sed ad odit delectus eos tempore beatae at
              quae non rerum saepe, placeat esse atque explicabo? Reprehenderit
              ea accusantium id odit itaque praesentium sit fuga illo esse eum
              ipsa delectus neque dolore quidem ipsum, voluptatem dolor
              architecto accusamus illum, molestiae aperiam est rem! Sequi,
              ullam atque? Harum, debitis hic laudantium, rerum ullam eum quidem
              nam doloremque reiciendis quia aliquid voluptates fuga eius
              eveniet quae quasi vitae obcaecati laboriosam eligendi. Impedit
              deserunt reiciendis ea ullam id, beatae eaque hic odio quasi, odit
              explicabo similique vel distinctio, quia atque totam sint facere
              quibusdam eum eius minus! Quae aperiam fugiat corporis corrupti
              molestiae, distinctio, sit esse quaerat quasi blanditiis
              praesentium aut explicabo voluptate animi quibusdam eum iure
              earum! Voluptatem reiciendis error dolor repellendus rem tempore
              asperiores, et dolorum odit temporibus, quas recusandae aperiam
              accusantium! Assumenda expedita, in nam tempora odio impedit at,
              quae, cumque sint et magni? Molestias veritatis deleniti fuga quo
              eligendi minus vitae pariatur, temporibus voluptates. Voluptatum,
              repellendus nostrum veniam neque, laboriosam excepturi laborum
              doloribus dolorem cumque maiores in quibusdam sit dolore ipsa eos
              illo? Eos, repellendus deleniti.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
