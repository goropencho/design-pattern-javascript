class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.getInstance()) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }
}

function tryThis() {
  const s1 = Singleton.getInstance();
  const s2 = Singleton.getInstance();

  if (s1 === s2) {
    console.log('Singleton works');
  } else {
    console.log("No, it doesn't");
  }
}

tryThis();
