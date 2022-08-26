import { initializeApp } from "firebase/app";
import {
  getFirestore,
  getDocs,
  getDoc,
  query,
  where,
  doc,
  collection,
  setDoc,
  addDoc,
  Timestamp,
} from "firebase/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MSJ_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const appFirebase = initializeApp(firebaseConfig);
const appFirestore = getFirestore(appFirebase);

export async function traerProductos() {
  const prodsCollection = collection(appFirestore, "productos");
  const prodsSnapshot = await getDocs(prodsCollection);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}
export async function traerCarousel() {
  const carouselCollection = collection(appFirestore, "carousel");
  const prodsSnapshot = await getDocs(carouselCollection);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}
export async function traerCategorias() {
  let prods = [];
  let category = [];
  let categories = traerProductos()
    .then((res) => {
      prods = res;
    })
    .then(() => {
      category = prods.map((item) => {
        return (category = [item.category]);
      });
      const array = new Set(category.map((obj) => obj[0]));
      const cat = [...array];
      return cat;
    });
  return categories;
}

export async function traerProductosDeCategoria(categoriaId) {
  const prodsCollection = collection(appFirestore, "productos");
  const q = query(prodsCollection, where("category", "==", categoriaId));
  const prodsSnapshot = await getDocs(q);
  let respuesta = prodsSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return respuesta;
}
export async function traerUnProducto(itemId) {
  const docref = doc(appFirestore, "productos", itemId);
  const docSnapshot = await getDoc(docref);
  return {
    id: docSnapshot.id,
    ...docSnapshot.data(),
  };
}
export async function exportDataToFirestore() {
  const productos = [
    {
      name: "Termo Lumilagro 1lt",
      category: "Termos",
      price: 500,
      img: "/img/LumilagroA.jpg",
      desc: "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.\n\nSuspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    },
    {
      name: "Termo Lumilagro 1lt Blanco",
      category: "Termos",
      price: 550,
      img: "/img/LumilagroB.jpg",
      desc: "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.\n\nCum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    },
    {
      name: "Termo Lumilagro 1lt Negro",
      category: "Termos",
      price: 550,
      img: "/img/LumilagroN.png",
      desc: "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
    },
    {
      name: "Termo Stanley 1lt Stargazing",
      category: "Termos",
      price: 1250,
      img: "/img/StanleyStargazing.jpg",
      desc: "Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.",
    },
    {
      name: "Termo Stanley 1lt Northern Hills",
      category: "Termos",
      price: 1250,
      img: "/img/StanleyNorthernHills.jpg",
      desc: "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.",
    },
    {
      name: "Termo Stanley 1lt Polar",
      category: "Termos",
      price: 990,
      img: "/img/StanleyB.jpg",
      desc: "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.\n\nMaecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat.\n\nCurabitur gravida nisi at nibh. In hac habitasse platea dictumst. Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem.",
    },
    {
      name: "Mate Stanley Verde",
      category: "Mates",
      price: 480,
      img: "/img/StanleyMateV.jpg",
      desc: "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
    },
    {
      name: "Mate Stanley Azul",
      category: "Mates",
      price: 480,
      img: "/img/StanleyMateA.png",
      desc: "In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.\n\nAliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.",
    },
    {
      name: "Mate Stanley Blanco",
      category: "Mates",
      price: 480,
      img: "/img/StanleyMateB.png",
      desc: "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.\n\nCras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
    },
    {
      name: "Termo Spinit 1lt ",
      category: "Termos",
      price: 600,
      img: "/img/Spinit.jpg",
      desc: "Fusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.\n\nIn hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante. Nulla justo.",
    },
    {
      name: "Termo Coleman 1.2lt",
      category: "Termos",
      price: 990,
      img: "/img/ColemanN.jpg",
      desc: "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    },
    {
      name: "Termo Waterdog Obus 1lt Gris",
      category: "Termos",
      price: 750,
      img: "/img/WaterdogObus.jpg",
      desc: "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.",
    },
    {
      name: "Termo Waterdog Obus 1lt Blanco",
      category: "Termos",
      price: 750,
      img: "/img/WaterdogObusB.jpg",
      desc: "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
    },
    {
      name: "Copon Waterdog 350ml",
      category: "Mates",
      price: 250,
      img: "/img/WaterdogCopon.jpg",
      desc: "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.",
    },
    {
      name: "Mate Waterdog Zoilo Gris",
      category: "Mates",
      price: 250,
      img: "/img/MateWaterdogG.jpg",
      desc: "Phasellus in felis. Donec semper sapien a libero. Nam dui.\n\nProin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.",
    },
    {
      name: "Mate Waterdog Zoilo Negro",
      category: "Mates",
      price: 250,
      img: "/img/MateWaterdogN.jpg",
      desc: "Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.\n\nPraesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
    },
  ];
  const prodsCollection = collection(appFirestore, "productos");
  productos.forEach((item) => {
    const newDoc = doc(prodsCollection);
    setDoc(newDoc, item)
      .then((res) => {
        console.log("Documento guardado:", newDoc.id);
      })
      .catch((error) => console.log("error: ", error));
  });
}

export async function createBuyOrder(dataOrder) {
  const orderColectionRef = collection(appFirestore, "orders");
  const dateTimestamp = Timestamp.now();
  const dataOrderWithDate = {
    ...dataOrder,
    date: dateTimestamp,
  };
  const orderCreated = await addDoc(orderColectionRef, dataOrderWithDate);
  return orderCreated;
}
export default appFirestore;
