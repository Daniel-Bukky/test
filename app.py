from collections import OrderedDict
from flask import Flask, jsonify, request, Response
import json
import psycopg2


app = Flask(__name__)
# Database configuration
# postgresql://test1db_owner:nVOwyLk46ShI@ep-flat-wind-a2nejoly.eu-central-1.aws.neon.tech/test1db?sslmode=require
DB_CONFIG = {
    "host": "ep-flat-wind-a2nejoly.eu-central-1.aws.neon.tech",
    "database": "test1db",
    "user": "test1db_owner",
    "password": "nVOwyLk46ShI",
    "sslmode": "require"
}

# Database connection function


def get_db_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    return conn


@app.route("/db_test")
def db_test():
    try:
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("SELECT version();")
        version = cur.fetchone()
        conn.close()
        return f"Connected to: {version[0]}"
    except Exception as e:
        return f"Error: {str(e)}"


@app.route("/persons", methods=["POST"])
def add_person():
    try:
        # Get JSON data from request
        data = request.json
        fname = data.get("fname")
        age = data.get("age")

        # Insert data into the database
        conn = get_db_connection()
        cur = conn.cursor()
        cur.execute("INSERT INTO persons (fname, age) VALUES (%s, %s)", (fname, age))
        conn.commit()
        cur.close()
        conn.close()

        return jsonify({"message": "Person added successfully!"}), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/persons", methods=["GET"])
def get_persons():
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("SELECT * FROM persons ORDER BY person_id;")

        rows = cur.fetchall()

        result = []
        for row in rows:
            result.append(OrderedDict([
                ("person_id", row[0]),
                ("fname", row[1]),
                ("age", row[2])
            ]))

        cur.close()
        conn.close()
        response_data = json.dumps(result)
        return Response(response_data, content_type='application/json')

    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/persons/<int:person_id>", methods=["GET"])
def get_person_by_id(person_id):
    try:
        conn = get_db_connection()
        cur = conn.cursor()

        cur.execute("SELECT * FROM persons WHERE person_id=%s", (person_id, ))

        person = cur.fetchone()

        cur.close()
        conn.close()

        if person:
            ordered = OrderedDict([
                ("person_id", person[0]),
                ("fname", person[1]),
                ("age", person[2])
            ])
            response_data = json.dumps(ordered)
            return Response(response_data, content_type='application/json')
        else:
            return jsonify({"message": "Person not found"}), 404

    except Exception as e:
        return jsonify({"error": str(e)}), 400


@app.route("/persons/<int:id>", methods=["DELETE"])
def delete_person(id):
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("DELETE FROM persons WHERE person_id = %s", (id,))
    deleted_rows = cur.rowcount
    conn.commit()
    conn.close()
    if deleted_rows > 0:
        return f"Person with id {id} deleted successfully"
    else:
        return f"Couldn't find person with id {id}"

@app.route("/persons/<int:id>", methods=["PUT"])
def update_person(id):
    data = request.json
    fname = data.get("fname")
    age = data.get("age")
    conn = get_db_connection()
    cur = conn.cursor()
    cur.execute("UPDATE persons SET fname = %s, age = %s WHERE person_id = %s", (fname, age, id))
    updated_rows = cur.rowcount
    conn.commit()
    conn.close()
    if updated_rows > 0:
        return f"Person with id {id} updated successfully"
    else:
        return f"Couldn't find person with id {id}"


def read_json_file():
    with open("data.json", "r") as file:
        return json.load(file)


def write_json_file(data) -> None:
    with open('data.json', 'w') as file:
        json.dump(data, file, indent=4)


@app.route("/", methods=['GET'])
def get_all_data():
    data = read_json_file()
    return jsonify(data)


@app.route("/data/<int:item_id>", methods=['GET'])
def get_data_by_id(item_id):
    data = read_json_file()
    entry = next((item for item in data if item['id'] == item_id), None)
    if entry:
        return jsonify(entry)
    return jsonify({"message": "Item not found"}), 404


@app.route('/', methods=['POST'])
def add_data():
    new_entry = request.get_json()
    data = read_json_file()
    data.append(new_entry)
    write_json_file(data)
    return jsonify({'message': 'Entry added successfully'}), 201


@app.route("/data/<int:item_id>", methods=['DELETE'])
def delete_data_by_id(item_id):
    data = read_json_file()
    entry = next((item for item in data if item['id'] == item_id), None)
    if entry:
        data.remove(entry)
        write_json_file(data)
        return jsonify({"message": f"Entry with id {item_id} deleted successfully"}), 200
    return jsonify({"message": "Item not found"}), 404


@app.route("/data/<int:item_id>", methods=['PATCH'])
def patch_data_by_id(item_id):
    data = read_json_file()
    entry = next((item for item in data if item['id'] == item_id), None)
    if entry:
        update_data = request.get_json()
        for key, value in update_data.items():
            if key in entry:
                entry[key] = value

        write_json_file(data)
        return jsonify({"message": f"Entry with id {item_id} updated successfully"}), 200
    return jsonify({"message": "Item not found"}), 404


if __name__ == '__main__':
    app.run(debug=True)
